import { EntryRetrieveAttrs } from "../../../apiclient/autogenerated";
import { EntryRetrieveValueAsGroup } from "../../../apiclient/autogenerated/models/EntryRetrieveValueAsGroup";
import { EntryRetrieveValueAsObject } from "../../../apiclient/autogenerated/models/EntryRetrieveValueAsObject";

export type EditableEntryAttrValue = {
  asObject?: EntryRetrieveValueAsObject;
  asString?: string;
  asNamedObject?: { [key: string]: EntryRetrieveValueAsObject };
  asArrayObject?: Array<EntryRetrieveValueAsObject>;
  asArrayString?: Array<string>;
  asArrayNamedObject?: Array<{ [key: string]: EntryRetrieveValueAsObject }>;
  asArrayGroup?: Array<EntryRetrieveValueAsGroup>;
  asArrayRole?: Array<EntryRetrieveValueAsGroup>;
  asBoolean?: boolean;
  asGroup?: EntryRetrieveValueAsGroup;
  asRole?: EntryRetrieveValueAsGroup;
};

export type EditableEntry = {
  name: string;
  attrs: Record<string, EditableEntryAttrs>;
};

export type EditableEntryAttrs = Pick<
  EntryRetrieveAttrs,
  "id" | "type" | "isMandatory" | "schema"
> & {
  value: EditableEntryAttrValue;
};
