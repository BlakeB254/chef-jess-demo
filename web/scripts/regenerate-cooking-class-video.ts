import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import * as fs from 'fs';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';
import path from 'path';

// Initialize Genkit
const ai = genkit({
  plugins: [googleAI()],
});

async function generateChefTeachingVideo() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error('Error: GEMINI_API_KEY or GOOGLE_API_KEY environment variable is required.');
    process.exit(1);
  }

  console.log('Initializing video generation with Veo 2 (Image-to-Video) for Cooking Class...');

  // The chef's image
  const chefImageFilename = '6b60bf_f5f0f04908594804ba5452f3e8e955ab_mv2_d_5340.jpg';
  const imagePath = path.resolve(__dirname, `../public/assets/${chefImageFilename}`);

  if (!fs.existsSync(imagePath)) {
    console.error(`Error: Chef image not found at ${imagePath}`);
    process.exit(1);
  }

  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString('base64');
  const mimeType = 'image/jpeg';

  // Prompt focused on the Cooking Class context, featuring HER
  const prompt = "Cinematic shot of this professional female chef teaching a cooking class in a beautiful kitchen. She is smiling, talking, and demonstrating cooking techniques to students (out of frame or blurred). Warm, inviting atmosphere, 4k, photorealistic, slow motion.";

  try {
    let { operation } = await ai.generate({
      model: googleAI.model('veo-2.0-generate-001'),
      prompt: [
        { text: prompt },
        {
          media: {
            contentType: mimeType,
            url: `data:${mimeType};base64,${base64Image}`,
          },
        },
      ],
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation.');
    }

    console.log('Video generation started... Polling for completion (this may take a minute).');
    
    while (!operation.done) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      operation = await ai.checkOperation(operation);
      console.log(`Operation status: ${operation.done ? 'Done' : 'In Progress'}`);
    }

    if (operation.error) {
      throw new Error(`Video generation failed: ${operation.error.message}`);
    }

    const video = operation.output?.message?.content.find((p) => !!p.media);
    if (!video?.media?.url) {
      throw new Error('Failed to find the generated video in the operation output.');
    }

    console.log('Video generated! Downloading...');

    const videoUrl = `${video.media.url}&key=${apiKey}`;
    const fetch = (await import('node-fetch')).default;
    const videoResponse = await fetch(videoUrl);

    if (!videoResponse.ok || !videoResponse.body) {
      throw new Error(`Failed to fetch video: ${videoResponse.statusText}`);
    }

    const outputDir = path.resolve(__dirname, '../public/assets');
    const outputPath = path.join(outputDir, 'cooking-class-hero.mp4');
    const fileStream = fs.createWriteStream(outputPath);
    
    // Use standard Node.js piping for node-fetch response body
    if (videoResponse.body) {
      // @ts-expect-error - node-fetch body stream compatibility
      videoResponse.body.pipe(fileStream);
    } else {
      throw new Error('Response body is empty');
    }

    await new Promise((resolve, reject) => {
      fileStream.on('finish', resolve);
      fileStream.on('error', reject);
    });

    console.log(`Success! Video saved to: ${outputPath}`);

  } catch (error) {
    console.error('Error generating video:', error);
    process.exit(1);
  }
}

generateChefTeachingVideo();
