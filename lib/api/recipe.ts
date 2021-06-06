import head from 'lodash/head';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items.map((post) => ({ id: post.sys.id, ...post.fields }));
  console.log(`Error getting Entries for ${entries}.`);
}

export async function fetchEntryBySlug(slug: string) {
  try {
    const result = await client.getEntries({
      content_type: 'recipe',
      'fields.slug': slug,
    });
    return head(result.items).fields;
  } catch (e) {
    console.log('e', e);
  }
}

export default { fetchEntries };
