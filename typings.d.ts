export interface Post {
  _id: string
  _createdAt: string
  title: string
  notes: [object]
  author: {
    name: string
    image: string
  }
  comments: [Comment]
  description: string
  mainImage: {}
  slug: {
    current: string
  }
  body: [object]
  steps: [string]
  ingredients: [string]
  subpics: [
    asset: {
      url: string
    }
  ]
}

export interface Comment {
  approved: boolean
  comment: string
  email: string
  name: string
  post: {
    _ref: string
    _type: string
  }
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}
