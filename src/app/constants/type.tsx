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

export type TasksResponseType = {
    id: string;
    title: string;
    location: string;
    description: string;
    dueDate: string;
    budget: number;
    remoteEligible: boolean;
    consumer: {
        id: string;
        account: string;
        name: string;
        requestPosted: number;
        requestsCompleted: number;
    }
}

export type TasksRequestType = {
    title: string;
    location: string;
    description: string;
    dueDate: string;
    budget: number;
    remoteEligible: boolean;
}

export type TaskRequestType = {
    requestId: string;
}

export type TaskResponseType = {
    id: string;
    title: string;
    location: string;
    description: string;
    dueDate: string;
    budget: number;
    remoteEligible: boolean;
    offers: {
        id: string,
        provider: {
            id: string,
            account: string,
            description: string,
            totalRating: number,
            reviewCount: number,
            isPremium: boolean,
            isSubscriptionActive: boolean,
        },
        request: string,
        price: number | null
    }[]
}

export type OfferRequestType = {
    requestId: string;
    price?: number;
}

export type SelectOfferRequestType = {
    requestId: string;
    offerId: string;
}

export type CompleteRequestRequestType = {
    requestId: string;
}

export type MessageRequestType = {
    peerId: string;
}

export type MessagesResponseType = {
    id: string;
    timestamp: string;
    sender: string;
    receiver: string;
    content: string;
}[]
