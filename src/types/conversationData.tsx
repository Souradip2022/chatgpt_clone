// Define the structure of a single message in a conversation
interface Message {
  user: string;
  message: string;
}

// Define the structure of a conversation, including its title and the array of messages
interface Conversation {
  title: string;
  conversation: Message[];
}

// Define the structure for a date entry, which is a record where the key is a date string
// and the value is an array of Conversation objects
interface DateEntry {
  [date: string]: Conversation[];
}

// Define the structure of the entire conversation data, which is an object containing
// an array of DateEntry objects
interface ConversationData {
  date: DateEntry[];
}