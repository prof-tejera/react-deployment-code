/**
 * Editor Setup
 * - Install Package Manager
 * - Themes: Monokai
 */

/**
 * React Setup
 * - Install Package: https://packagecontrol.io/packages/Babel
 * - View -> Syntax -> Open all with current extension as… → Babel → JavaScript (Babel)
 */

/**
 * Prettier:
 * - Add Package: https://packagecontrol.io/packages/JsPrettier
 * - yarn add prettier --dev OR npm install --save-dev prettier
 *  - Sublime Text -> Preferences -> Package Settings -> JsPrettier -> Settings User
 *  - Paste jsprettier-settings.json
 * - Copy .prettierrc to root of project
 */

/**
 * Like:
 * - super fast (native)
 * - big community
 * - lots of packages / themes
 *
 * No like:
 * - configuration hell
 * - cannot open projects /files from dock
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
