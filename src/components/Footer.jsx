export const Footer = ({uid}) => {
  return (
    <>
      <footer className="m-6">
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-600">
          {uid && <span>{uid}</span>}
          </p>

          <p className="text-sm text-gray-500">
            <span className="block sm:inline">All rights reserved. </span>

            <a className="inline-block text-indigo-500 underline transition hover:text-indigo-500/75" href="#">
              Terms & Conditions
            </a>

            <span> &middot; </span>

            <a className="inline-block text-indigo-500 underline transition hover:text-indigo-500/75" href="#">
              Privacy Policy
            </a>
          </p>

          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 Rustica</p>
        </div>
      </footer>
    </>
  )
}
