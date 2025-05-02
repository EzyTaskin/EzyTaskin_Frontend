export type ProfileType = "consumer" | "provider";
export type CategoryType = {
  id: string;
  name: string;
}[];
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
  categories: CategoryType;
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
