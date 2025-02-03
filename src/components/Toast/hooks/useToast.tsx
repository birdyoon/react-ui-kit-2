import { ReactNode, useEffect, useRef } from "react";
import Toast from "..";
import { createRoot, Root } from "react-dom/client";

interface ToasterProps {
  title: ReactNode;
  description: ReactNode;
  delay: number;
  position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

const positions = {
  "bottom-right": { bottom: "20px", right: "20px" },
  "bottom-left": { bottom: "20px", left: "20px" },
  "top-right": { top: "20px", right: "20px" },
  "top-left": { top: "20px", left: "20px" },
};

export const useToast = () => {
  const rootRef = useRef<Root>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const close = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (rootRef.current) {
      rootRef.current.unmount();
    }
  };
  const handleClickClose = () => {
    close();
  };

  const toast = ({ title, description, delay, position }: ToasterProps) => {
    close();

    let container = document.getElementById("ui-toaster");

    if (!container) {
      container = document.createElement("div");
      container.id = "ui-toaster";
      document.body.appendChild(container);
    }

    rootRef.current = createRoot(container);

    const positionStyles: React.CSSProperties = {
      position: "fixed",
      ...positions[position],
    };

    const toastElement = (
      <Toast style={positionStyles}>
        <Toast.Content>
          <Toast.Title>{title}</Toast.Title>
          <Toast.Description>{description}</Toast.Description>
          <Toast.Close>
            <button onClick={handleClickClose}>close</button>
          </Toast.Close>
        </Toast.Content>
      </Toast>
    );

    rootRef.current.render(toastElement);

    timeoutRef.current = setTimeout(() => {
      close();
    }, delay);
  };

  useEffect(() => {
    // 토스트 사라지기전에 다른 페이지로 넘어갔을 경우
    return () => {
      close();
    };
  }, []);

  return toast;
};

export const Toaster = () => {
  return <div id="ui-toaster" />;
};
