import { cls } from "../libs/utils";

interface MessageProps {
  reversed?: boolean;
  text: string;
  avatarURL?: string;
}

export default function Message({ reversed, text, avatarURL }: MessageProps) {
  return (
    <div
      className={cls(
        "flex items-start space-x-2",
        reversed ? "flex-row-reverse space-x-reverse" : ""
      )}
    >
      <div className="h-8 rounded-full aspect-square bg-slate-300" />
      <p className="p-2 text-sm text-gray-700 border border-gray-400 rounded-md">
        {text}
      </p>
    </div>
  );
}
