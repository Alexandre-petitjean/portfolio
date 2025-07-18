export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 text-center py-8 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Alexandre Petitjean - Expert Django &
          DevOps
        </p>
      </div>
    </footer>
  );
}
