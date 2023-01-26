/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";

import { Role } from "../../apiclient/autogenerated";

import { RoleForm } from "./RoleForm";

import { TestWrapper } from "services/TestWrapper";

test("should render a component with essential props", function () {
  const role: Role = {
    id: 0,
    name: "",
    description: "",
    users: [],
    groups: [],
    adminUsers: [],
    adminGroups: [],
  };

  const setRole = () => {
    /* do nothing */
  };
  const setSubmittable = () => {
    /* do nothing */
  };

  /* eslint-disable */
  jest
    .spyOn(require("apiclient/AironeApiClientV2").aironeApiClientV2, "getUsers")
    .mockResolvedValue(Promise.resolve([]));
  jest
    .spyOn(
      require("apiclient/AironeApiClientV2").aironeApiClientV2,
      "getGroups"
    )
    .mockResolvedValue(Promise.resolve([]));
  /* eslint-enable */

  expect(() =>
    render(
      <RoleForm
        role={role}
        setRole={setRole}
        setSubmittable={setSubmittable}
      />,
      {
        wrapper: TestWrapper,
      }
    )
  ).not.toThrow();
});
