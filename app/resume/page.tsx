export default function ResumePage() {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
        <p className="mt-3 text-zinc-300">
          Download the PDF or view it below.
        </p>
  
        <div className="mt-6">
          <a
            className="inline-flex rounded-full bg-zinc-50 px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
  
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800">
          <iframe
            src="/resume.pdf"
            className="h-[80vh] w-full bg-white"
            title="Resume PDF"
          />
        </div>
      </section>
    );
  }
  