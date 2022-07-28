export default interface BlogShortcardProps {
  article: {
    id: number;
    short_text: string;
    full_text?: string;
    title?: string;
  }
};