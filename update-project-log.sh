#!/bin/bash

# Get current date
DATE=$(date '+%Y-%m-%d %H:%M:%S')

# Update timestamp in AI_CONTEXT.md
sed -i '' "s/Last Updated: .*/Last Updated: $DATE/" AI_CONTEXT.md

# Create LATEST_CHANGES.md with recent commits
echo "## Latest Updates ($DATE)" > LATEST_CHANGES.md
git log --pretty=format:"- %h %ad: %s" --date=format:"%Y-%m-%d %H:%M:%S" -n 5 >> LATEST_CHANGES.md

# Update Recent Updates section in AI_CONTEXT.md
sed -i '' '/^## Recent Updates/,/^##/c\
## Recent Updates\
- '"$DATE"': Set up Netlify deployment successfully\
- '"$DATE"': Updated project documentation\
- '"$DATE"': Added Collaborative OS module plan\
- '"$DATE"': Created RESTART.md with work protocols\
\
' AI_CONTEXT.md

echo "Documentation updated on $DATE"