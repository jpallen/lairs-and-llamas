import React from "react";
import { Box, Text, useStdout } from "ink";
import { MessageHistory } from "./components/MessageHistory.js";
import { ToolCallBar } from "./components/ToolCallBar.js";
import { InputBar } from "./components/InputBar.js";
import { useClaudeSession } from "./hooks/useClaudeSession.js";
import type { ChatMessage } from "./types.js";

interface AppProps {
  systemPrompt: string;
  cwd: string;
  debugMode: boolean;
  initialSessionId: string | null;
  initialMessages: ChatMessage[];
  initialPrompt?: string;
  onSessionInit: (sessionId: string) => void;
}

const BORDER = "#8B4513";

export function App({ systemPrompt, cwd, debugMode, initialSessionId, initialMessages, initialPrompt, onSessionInit }: AppProps) {
  const { messages, currentToolCall, isProcessing, sendMessage } =
    useClaudeSession({ systemPrompt, cwd, debugMode, initialSessionId, initialMessages, initialPrompt, onSessionInit });

  const { stdout } = useStdout();
  const terminalHeight = stdout?.rows ?? 24;
  const terminalWidth = stdout?.columns ?? 80;

  const frameWidth = Math.min(80, terminalWidth);
  // Box with borderStyle="round" uses 2 chars for borders + 2 for padding
  const contentWidth = frameWidth - 4;

  const toolBarHeight = currentToolCall ? 1 : 0;
  const inputHeight = 1;
  // border top/bottom = 2, tool bar, input bar
  const chromeHeight = 2 + toolBarHeight + inputHeight;
  const historyHeight = Math.max(1, terminalHeight - chromeHeight);

  return (
    <Box
      width={terminalWidth}
      height={terminalHeight}
      justifyContent="center"
    >
      <Box
        flexDirection="column"
        width={frameWidth}
        height={terminalHeight}
        borderStyle="round"
        borderColor={BORDER}
        paddingLeft={1}
        paddingRight={1}
      >
        <MessageHistory
          messages={messages}
          height={historyHeight}
          contentWidth={contentWidth}
          isProcessing={isProcessing}
          debugMode={debugMode}
        />
        {currentToolCall && (
          <ToolCallBar toolCall={currentToolCall} width={contentWidth} />
        )}
        <InputBar onSubmit={sendMessage} isProcessing={isProcessing} />
      </Box>
    </Box>
  );
}
