/**
 * Editor Setup
 * - Install Package Manager
 * - Themes: Monokai
 */

/**
 * React Setup
 * - Nothing to do here
 */

/**
 * Prettier:
 * - Add Package: https://atom.io/packages/prettier-atom
 * - Copy .prettierrc to root of project
 * - Settings -> Packages -> Prettier -> Toggle Format on Save
 */

/**
 * Like:
 * - cli available by default
 * - super big community
 * - lots of packages / themes (maybe too many)
 * - configuration through UI rather than JSON (also available)
 * - can open files from dock
 *
 * No like:
 * - based on Electron so its sluggish
 * - cannot open projects from dock
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
