export type WorkExperience = {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description?: string;
  duties: string[];
  tags: string[];
};

export type Project = {
  name: string;
  slug: string;
  image: string;
  url?: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
};

export type Message = {
  name: string;
  email: string;
  subject: string;
  message: string;
  id?: string;
};
