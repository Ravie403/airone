/* tslint:disable */
/* eslint-disable */
/**
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface EntryHistoryAttributeValueValueAsGroup
 */
export interface EntryHistoryAttributeValueValueAsGroup {
  /**
   *
   * @type {number}
   * @memberof EntryHistoryAttributeValueValueAsGroup
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof EntryHistoryAttributeValueValueAsGroup
   */
  name?: string;
}

export function EntryHistoryAttributeValueValueAsGroupFromJSON(
  json: any
): EntryHistoryAttributeValueValueAsGroup {
  return EntryHistoryAttributeValueValueAsGroupFromJSONTyped(json, false);
}

export function EntryHistoryAttributeValueValueAsGroupFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EntryHistoryAttributeValueValueAsGroup {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    name: !exists(json, "name") ? undefined : json["name"],
  };
}

export function EntryHistoryAttributeValueValueAsGroupToJSON(
  value?: EntryHistoryAttributeValueValueAsGroup | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
  };
}
