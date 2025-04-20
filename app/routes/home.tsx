import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold text-center">
          What Can I Help With?
        </h1>
        <div className="flex flex-row w-full max-w-2xl absolute bottom-0 items-center rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Textarea
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full p-4 text-lg border-0 resize-none field-sizing-fixed"
            rows={Math.min(searchQuery.split('\n').length, 4)}
          />
          <Tooltip>
            <TooltipTrigger>
              <Button disabled={!searchQuery} variant="ghost" size={'lg'} className="disabled:cursor-not-allowed">
                <SendHorizonal color={searchQuery ? 'white' : 'gray'} size={30} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {searchQuery ? "Send Message" : "Message can't empty" }
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
