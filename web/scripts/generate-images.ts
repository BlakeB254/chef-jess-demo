import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import parseDataURL from 'data-urls';
import { writeFile } from 'node:fs/promises';
import path from 'path';
import * as fs from 'fs';

const ai = genkit({
  plugins: [googleAI()],
});

const ASSETS = [
  {
    filename: 'personal-chef-hero.jpg',
    prompt: 'Professional personal chef plating a gourmet dish in a luxurious home kitchen, close up on hands and food, cinematic lighting, photorealistic, 4k, high resolution',
  },
  {
    filename: 'cooking-class-hero.jpg',
    prompt: 'Happy couple cooking together in a modern kitchen, laughing, holding wine glasses, vegetables on counter, warm evening lighting, photorealistic, 4k',
  },
  {
    filename: 'catering-hero.jpg',
    prompt: 'Elegant catering spread on a table, variety of gourmet appetizers, golden lighting, luxury event atmosphere, photorealistic, 4k, depth of field',
  },
  {
    filename: 'cooking-class-detail.jpg',
    prompt: 'Close up of fresh pasta being made by hand, flour on wooden table, hands shaping dough, artisan quality, photorealistic, macro shot',
  }
];

async function generateImages() {
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
      const response = await ai.generate({
        model: googleAI.model('imagen-3.0-generate-001'),
        prompt: asset.prompt,
        output: { format: 'media' },
      });

      if (response?.media?.url) {
        const parsed = parseDataURL(response.media.url);
        if (parsed) {
          await writeFile(path.join(outputDir, asset.filename), parsed.body);
          console.log(`✓ Saved ${asset.filename}`);
        } else {
           console.error(`✗ Failed to parse data URL for ${asset.filename}`);
        }
      } else {
        console.error(`✗ No media returned for ${asset.filename}`);
      }
    } catch (error) {
      console.error(`✗ Error generating ${asset.filename}:`, error);
    }
  }
}

generateImages();
