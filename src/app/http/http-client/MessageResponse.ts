export interface MessageResponse {
  type: "Success" | "Warning" | "Error";
  message: string;
}
