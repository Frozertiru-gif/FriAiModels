export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="section-container flex flex-col gap-2 text-sm text-muted md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} FryAIModels. All rights reserved.</p>
        <p>Built for creators and agencies automating AI influencer workflows.</p>
      </div>
    </footer>
  );
}
