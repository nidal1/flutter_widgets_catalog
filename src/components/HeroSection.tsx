import { Card } from '@/components/ui/card';
import Container from './Container';
import { SearchIcon } from './icons';

const HeroSection = () => {
  return (
    <Container className="py-10">
      <div className="flex flex-col items-center">
        {/* main heading */}
        <h1 className="text-3xl">Flutter widgets catalog</h1>
        {/* end main heading */}

        {/* subtitle */}
        <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400">
          A comprehensive, interactive reference for Flutter widgets, with{' '}
          <br /> live previews, code examples, and instant copy functionality.
        </p>
        {/* end subtitle */}

        {/* search input */}

        <button className="relative mt-6 w-full max-w-md flex items-center justify-between gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-left text-gray-500 shadow-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:ring-offset-gray-950">
          <div className="flex items-center gap-2">
            <SearchIcon className="h-4 w-4 text-gray-500" />
            <span>Search widgets...</span>
          </div>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">Ctrl</span>K
          </kbd>
        </button>
        {/* end search input */}

        {/* categories / components / variants */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center w-full">
          <Card className="flex-1 max-w-[200px]">
            <p className="text-center font-medium text-gray-600 dark:text-gray-400">
              <span className="text-3xl font-bold text-white ">7</span>
              <br />
              Categories
            </p>
          </Card>

          <Card className="flex-1 max-w-[200px]">
            <p className="text-center font-medium text-gray-600 dark:text-gray-400">
              <span className="text-3xl font-bold text-white ">45</span>
              <br />
              Components
            </p>
          </Card>

          <Card className="flex-1 max-w-[200px]">
            <p className="text-center font-medium text-gray-600 dark:text-gray-400">
              <span className="text-3xl font-bold text-white ">111</span>
              <br />
              Variants
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
