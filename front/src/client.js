

import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: "76vhc0c1",
    dataset: 'production',
    apiVersion: '2023-03-25',
    useCdn: true,
    token: "skOAXaOmJeD7FtHgSZqyZqdrkmH7neg68LFrLNEOnu8zdFGMyr3vj8SbM7D9G1UGLBYhmbGDXtRYQNVoHZEXyuYr4PgOCJHkHjCuY4raJR03Kimye2UGYnW6L57kukfl7DXCRotWNHEQ7S5oqg6kMA1GbVPq8KOgSkKIyCiOrXA2wkW4UMHH",
  });

  const builder = imageUrlBuilder(client);

  export const urlFor = (source) => builder.image(source);