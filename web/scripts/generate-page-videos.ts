import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import * as fs from 'fs';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';
import path from 'path';

const ai = genkit({
  plugins: [googleAI()],
});

const ASSETS = [
  {
    filename: 'personal-chef-hero.mp4',
    prompt: 'Cinematic shot of a personal chef plating a gourmet meal in a high-end kitchen, warm lighting, steam rising, photorealistic, 4k, slow motion',
  },
  {
    filename: 'cooking-class-hero.mp4',
    prompt: 'Happy couple cooking together in a modern kitchen, laughing, holding wine glasses, vegetables on counter, warm evening lighting, photorealistic, 4k, slow motion',
  },
  {
    filename: 'catering-hero.mp4',
    prompt: 'Panning shot of an elegant catering spread on a table, variety of gourmet appetizers, golden lighting, luxury event atmosphere, photorealistic, 4k, slow motion',
  }
];

async function generateVideos() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error('Error: GEMINI_API_KEY is required.');
    process.exit(1);
  }

  const outputDir = path.resolve(__dirname, '../public/assets');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const asset of ASSETS) {
    console.log(`Generating ${asset.filename}...`);
    try {
      let { operation } = await ai.generate({
        model: googleAI.model('veo-2.0-generate-001'),
        prompt: asset.prompt,
      });

      if (!operation) {
        throw new Error('Expected the model to return an operation.');
      }

      console.log(`  Polling for completion...`);
      while (!operation.done) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        operation = await ai.checkOperation(operation);
      }

      if (operation.error) {
        throw new Error(`Video generation failed: ${operation.error.message}`);
      }

      const video = operation.output?.message?.content.find((p) => !!p.media);
      if (!video?.media?.url) {
        throw new Error('Failed to find the generated video in the operation output.');
      }

      const videoUrl = `${video.media.url}&key=${apiKey}`;
      const fetch = (await import('node-fetch')).default;
      const videoResponse = await fetch(videoUrl);

      if (!videoResponse.ok || !videoResponse.body) {
        throw new Error(`Failed to fetch video: ${videoResponse.statusText}`);
      }

      const outputPath = path.join(outputDir, asset.filename);
      const fileStream = fs.createWriteStream(outputPath);
      
      // @ts-expect-error - node-fetch body stream compatibility
      if (videoResponse.body) videoResponse.body.pipe(fileStream);

      await new Promise((resolve, reject) => {
        fileStream.on('finish', resolve);
        fileStream.on('error', reject);
      });

      console.log(`  ✓ Saved ${asset.filename}`);

    } catch (error) {
      console.error(`  ✗ Error generating ${asset.filename}:`, error);
    }
  }
}

generateVideos();
