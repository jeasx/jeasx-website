import Article from "../components/Article";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Lead from "../components/Lead";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  return (
    <Layout title="MIT License" description="The MIT License">
      <Content>
        <Article category="Contributing" headline="MIT License">
          <Lead>Copyright (c) 2024-2025 Maik Jablonski (mail@jeasx.dev)</Lead>
          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions: The above copyright notice and
            this permission notice shall be included in all copies or
            substantial portions of the Software.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </Article>
      </Content>
    </Layout>
  );
}
