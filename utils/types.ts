export interface crArticle {
  title: string;
  description: string;
}

export interface updatedArticle {
  title?: string;
  description?: string;
}

export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
