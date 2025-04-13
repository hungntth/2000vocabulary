export interface Topic {
    id: string;
    name: string;
    description: string;
    image: string;
    numContents: number;
    no: number;
    created_at: string;
  }
  
  export interface TopicResponse {
    statusCode: number;
    message: string;
    data: Topic[];
  }