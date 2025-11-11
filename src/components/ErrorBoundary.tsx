import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error("Error caught by boundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
          <div className="text-center space-y-6 max-w-md">
            <div className="text-6xl">⚠️</div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-mono font-bold text-yellow-700 mb-2">
                OOPS_
              </h1>
              <p className="text-gray-600 font-mono text-sm mb-4">
                Something went wrong while loading this page.
              </p>
              <p className="text-gray-500 font-mono text-xs mb-6 break-words">
                {this.state.error?.message || "Unknown error"}
              </p>
            </div>
            <button
              onClick={() => window.location.href = "/"}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-mono border-2 border-yellow-600 px-6 py-2 cursor-pointer"
            >
              RETURN HOME
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
