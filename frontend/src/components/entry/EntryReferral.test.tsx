/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { EntryReferral } from "components/entry/EntryReferral";
import { TestWrapper } from "services/TestWrapper";

afterEach(() => {
  jest.clearAllMocks();
});

test("should render a component with essential props", async () => {
  const entryId = 1;

  const referredEntries = [
    {
      id: 1,
      name: "name",
      schema: {
        id: 2,
        name: "entity",
      },
    },
  ];

  /* eslint-disable */
  jest
    .spyOn(
      require("apiclient/AironeApiClientV2").aironeApiClientV2,
      "getEntryReferral"
    )
    .mockResolvedValue(
      Promise.resolve({
        results: referredEntries,
        count: referredEntries.length,
      })
    );
  /* eslint-enable */

  expect(() =>
    render(
      <BrowserRouter>
        <EntryReferral entryId={entryId} />
      </BrowserRouter>,
      { wrapper: TestWrapper }
    )
  ).not.toThrow();

  jest.clearAllMocks();
});
