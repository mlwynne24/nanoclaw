/**
 * One-time script to register the Graham Shops group.
 * Run with: npx tsx scripts/register-graham-shops.ts
 * Delete after use.
 */
import { initDatabase, setRegisteredGroup } from '../src/db.js';

const JID = '120363422044782660@g.us';

initDatabase();

setRegisteredGroup(JID, {
  name: 'Graham Shops',
  folder: 'graham-shops',
  trigger: '@Graham',
  added_at: new Date().toISOString(),
  containerConfig: {
    additionalMounts: [
      {
        hostPath: '~/repos/recipes-db',
        containerPath: 'recipes-db',
        readonly: false,
        excludePaths: ['.venv'],
      },
    ],
    secretKeys: [
      'VOYAGE_API_KEY',
      'SHOP_TESCO_EMAIL',
      'SHOP_TESCO_PASSWORD',
    ],
    envKeys: [
      'VOYAGE_API_KEY',
      'SHOP_TESCO_EMAIL',
      'SHOP_TESCO_PASSWORD',
    ],
    timeout: 600000,
  },
  requiresTrigger: true,
  isMain: false,
});

console.log(`Registered Graham Shops group (JID: ${JID})`);
