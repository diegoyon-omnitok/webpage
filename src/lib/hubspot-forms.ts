export type HubSpotFormConfig = {
  portalId: string;
  formId: string;
  region: string;
};

export const hubspotForms = {
  latamContact: {
    portalId: "45476524",
    formId: "04f89ed5-8ff0-4871-86ad-8400261e6033",
    region: "na1",
  },
  latamNewsletter: {
    portalId: "45476524",
    formId: "ccb6a570-9f14-496a-b21c-1fbb0ab9e2be",
    region: "na1",
  },
  usaContact: {
    portalId: "47201087",
    formId: "6455f60f-f38d-4b79-bc59-ac83604c8256",
    region: "na1",
  },
  usaEbook: {
    portalId: "47201087",
    formId: "aaa7d0ec-18bf-4ca5-90fe-c968ae7ac84f",
    region: "na1",
  },
  usaNewsletter: {
    portalId: "47201087",
    formId: "65bb24ea-6601-4982-b64d-565f29d321c2",
    region: "na1",
  },
} satisfies Record<string, HubSpotFormConfig>;
