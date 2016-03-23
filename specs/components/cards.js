import React from "react";
import expect from "expect";
import TestUtils from "react-addons-test-utils";

import Card from "../../js/components/cards/card";
import CardInfo from "../../js/components/cards/card-info";
import CardMeta from "../../js/components/cards/card-meta";
import CardHover from "../../js/components/cards/card-hover";

function setupCard() {
  let props = {
    user: {
      id: "1"
    },
    actions: {
      toggleHire: expect.createSpy()
    }
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Card {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

function setupCardInfo() {
  let props = {
    username: "UserName",
    spec: "Manager",
    online: true,
    hired: false
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CardInfo {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

function setupCardHover() {
  let props = {
    id: "1",
    username: "UserName",
    toggleHire: expect.createSpy(),
    hired: false
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CardHover {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components/cards', () => {
  describe('<Card />', () => {
    it("should render correctly", () => {
      const {output} = setupCard();

      expect(output.props.className).toBe("cards__item-wrapper");

      const [cardHover, cardInfo, cardMeta] = output.props.children;

      expect(cardInfo.type).toBe(CardInfo);
      expect(cardMeta.type).toBe(CardMeta);
    });
  });

  describe('<CardInfo />', () => {
    it("should render correctly", () => {
      const {output} = setupCardInfo();

      expect(output.props.className).toBe("cards__item-info card-info");

      const [hired, online, photo, username, spec] = output.props.children;

      expect(username.props.children).toBe("UserName");
      expect(spec.props.children).toBe("Manager");
      expect(online.props.children).toNotBe(null);
      expect(hired).toBe(null);
    });
  });

  describe('<CardHover />', () => {
    it("should render correctly", () => {
      const {output} = setupCardHover();

      expect(output.props.className).toBe("cards__item-hover card-hover");
      expect(output.props.children.props.children[1].props.children[0]).toBe("UserName")
    });
  });
});