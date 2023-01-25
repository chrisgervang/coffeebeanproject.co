# The Coffee Bean Project Website

> Based on The Chocolate Bar Project by [Case Sandberg](https://github.com/casesandberg/chocolatebarproject)

TCBP uses [Next.js](https://nextjs.org/) for its documentation. Here is how you can run the project locally:

1. Clone this repo

   ```sh
   git clone https://github.com/chrisgervang/coffeebeanproject.co.git
   ```

2. Go into the project root directory

   ```sh
   cd coffeebeanproject
   ```

3. Install JS dependencies

   ```sh
   npm i
   ```

4. Start the dev server

   ```sh
   npm run dev
   ```

5. (Optional) Enable git rerere

   ```sh
   mkdir .git/rr-cache
   ```

   [Learn More](https://git-scm.com/book/en/v2/Git-Tools-Rerere)

# Troubleshooting

If you are using nvm, create a file called `.huskyrc` in your home directory and add the following lines of code to it:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```