import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import parseDataURL from 'data-urls';
import { writeFile } from 'node:fs/promises';
import path from 'path';
import * as fs from 'fs';

const ai = genkit({
  plugins: [googleAI()],
});

const ASSET = {
  filename: 'culinary-experience.jpg',
  prompt: 'A warm, inviting close-up of a culinary experience, chef hands arranging fresh ingredients like basil and tomatoes on a rustic wooden table, soft natural lighting, photorealistic, 4k, high resolution, elegant kitchen atmosphere',
};

async function generateImage() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error('Error: GEMINI_API_KEY is required.');
    process.exit(1);
  }

  const outputDir = path.resolve(__dirname, '../public/assets');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Generating ${ASSET.filename}...`);
  try {
    const response = await ai.generate({
      model: googleAI.model('imagen-3.0-generate-001'),
      prompt: ASSET.prompt,
      output: { format: 'media' },
    });

    if (response?.media?.url) {
      const parsed = parseDataURL(response.media.url);
      if (parsed) {
        await writeFile(path.join(outputDir, ASSET.filename), parsed.body);
        console.log(`✓ Saved ${ASSET.filename}`);
      } else {
         console.error(`✗ Failed to parse data URL for ${ASSET.filename}`);
      }
    } else {
      console.error(`✗ No media returned for ${ASSET.filename}`);
    }
  } catch (error) {
    console.error(`✗ Error generating ${ASSET.filename}:`, error);
  }
}

generateImage();
