export type ProfileType = "consumer" | "provider";

export type RequestOfferType = {
  id: string;
  provider: string;
  request: string;
  price: number;
};

export type CategoryType = {
  id: string;
  name: string;
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
  offers: RequestOfferType[];
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

export type TaskResponseType = {
  id: string;
  title: string;
  location: string;
  description: string;
  dueDate: string;
  budget: number;
  remoteEligible: boolean;
};

export type TaskRequestType = {
  title: string;
  location: string;
  description: string;
  dueDate: string;
  budget: number;
  remoteEligible: boolean;
};

export type OfferType = {
  requestId: string;
  price?: number;
};

export type UpdateProfilePayloadType = {
  description: string;
  categories: string[];
};

export type UpdateAccountType = {
  fullName: string;
  phoneNumber: string;
  address: string;
};
