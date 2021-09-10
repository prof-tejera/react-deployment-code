/**
 * Editor Setup
 * - Themes: Monokai / Tomorrow Night Blue
 */

/**
 * React Setup
 * - Nothing to do here
 */

/**
 * Prettier:
 * - Add Extension: Prettier (Code -> Settings -> Extensions -> Search for Prettier)
 * - Copy .prettierrc to root of project
 * - Settings -> Packages -> Prettier -> Toggle Format on Save
 */

/**
 * Like:
 * - cli available by default
 * - big community
 * - can run in the cloud
 * - can even be embedded into a React app
 * - lots of packages / themes
 * - configuration through UI rather than JSON (also available)
 * - can open files / folders from dock
 * - Microsoft ecosystem
 * 
 * No like:
 * - it is electron based, which makes it slower
 */
import React from 'react';

class MyComponent extends React.Component {
  render() {
    const a = 1;
    const obj = {
      a: 1,
      b: 2,
    };

    return (
      <div
        id="main-div"
        className="hello-world"
        prop1="test-prop"
        pro2="test-prop2"
      >
        Hello World!
      </div>
    );
  }
}
