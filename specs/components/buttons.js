import React from "react";
import expect from "expect";
import TestUtils from "react-addons-test-utils";

import HireButton from "../../js/components/buttons/hire-button";

function setupHireButton() {
  let props = {
    hired: false,
    onClick: expect.createSpy()
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<HireButton {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components/buttons', () => {
  describe('<HireButton />', () => {
    it("should render correctly", () => {
      const {output} = setupHireButton();

      expect(output.props.className).toBe("button-hire ok-button");

      expect(output.props.onClick.calls.length).toBe(0);
      output.props.onClick();
      expect(output.props.onClick.calls.length).toBe(1);
    });
  });
});