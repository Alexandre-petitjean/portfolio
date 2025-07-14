"use client";

import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Une erreur est survenue
              </h2>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
              >
                Recharger la page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
