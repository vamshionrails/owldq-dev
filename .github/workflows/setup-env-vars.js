const fs = require('fs');

try {
  const config = JSON.parse(fs.readFileSync('path/to/your/config.json', 'utf8'));

  process.env.REPO_NAME = config.REPO_NAME;
  process.env.DESCRIPTION = config.DESCRIPTION;
  process.env.PRIVATE = config.PRIVATE;
  // Add more variables as needed...

  console.log('Environment variables set successfully.');
} catch (error) {
  console.error('Error reading or parsing the configuration file:', error);
  process.exit(1);
}
