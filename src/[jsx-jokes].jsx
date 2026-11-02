import { html } from "jsx-async-runtime";

export default async function () {
  const { value } = await (await fetch("https://api.chucknorris.io/jokes/random")).json();

  return (
    <>
      {html("<!DOCTYPE html>")}
      <html lang="en">
        <head>
          <title>Jokes</title>
          <style>{".center {text-align: center;}"}</style>
        </head>
        <body class="body" style="background-color: red; padding: 1rem">
          <div class="v-align h-align" data-props={{ key: "value" }}>
            <h1 class="center my-class" style="color: white">
              {value}
            </h1>
          </div>
        </body>
      </html>
    </>
  );
}
