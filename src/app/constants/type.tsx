export type ProfileType = "consumer" | "provider";
export type CategoryType = {
  id: string;
  name: string;
};

export type OfferType = {
  id: string;
  provider: string;
  request: string;
  price: number;
};

export type SelectedType = {
  id: string;
  provider: string;
  request: string;
  price: number;
};

export type CompletedRequestType = {
  id: string;
  consumer: string;
  selected: SelectedType;
  title: string;
  description: string;
  location: string;
  budget: number;
  dueDate: string;
  remoteEligible: boolean;
  completedDate: string;
  offers: OfferType[];
  categories: CategoryType[];
};

export type ProviderProfileType = {
  id: string;
  account: string;
  description: string;
  averageRating: number;
  totalRating: number;
  reviewCount: number;
  isPremium: boolean;
  isSubscriptionActive: boolean;
  subscriptionDate: string;
  categories: CategoryType[];
  completedRequests: CompletedRequestType[];
};

export type ConsumerProfileType = {
  id: string;
  account: string;
  requestsPosted: number;
  requestsCompleted: number;
};

export type CommonDetailType = {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  address: string;
};
export type PaymentSendCardType = {
  number: string;
  expiry: string;
  cvv: string;
  name: string;
};

export type PaymentReceiveCardType = {
  id: string;
  number: string;
  expiry: string;
  cvv: string;
  name: string;
};
