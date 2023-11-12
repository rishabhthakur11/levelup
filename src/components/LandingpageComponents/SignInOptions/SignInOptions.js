import EmailPassword from "@/components/SignInButtons/EmailPassword";
import GithubSignIn from "@/components/SignInButtons/GithubSignIn";
import GoogleSignIn from "@/components/SignInButtons/GoogleSignIn";
import React from "react";

function SignInOptions() {
  return (
    <div className="mt-24 mb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col  justify-center">
        <h2 className="text-center text-lg font-semibold leading-8 text-textGray tracking-wider">
          START YOUR JOURNEY WITH LEVELUP
        </h2>
        <div className="flex md:mt-20 mt-12 flex-col md:flex-row">
          <div className="py-3 border border-divided rounded-t px-3 mt-10 mb-10 md:w-5/12">
            <div className="overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-divided">
                <li>
                  <a className="block">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-btnOrange text-2xl font-bold">
                          LEARN
                        </p>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center font-normal text-textGray text-md">
                            Learn from carefully curated learning path with
                            up-to-date interactive courses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="block">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-themeBlue text-2xl font-bold">
                          APPLY
                        </p>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center font-normal text-textGray text-md">
                            Explore career opportunity and take the test at your
                            convenience
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="block">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-themeGreen text-2xl font-bold">
                          GROW
                        </p>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center font-normal text-textGray text-md">
                            Become better programmer by building tons of
                            real-world projects and keep improving{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-4 py-12 border border-divided rounded-t sm:px-6 flex flex-grow justify-center items-center flex-col gap-y-5">
            <GoogleSignIn />
            <GithubSignIn />
            <div>
              <p className="flex items-center font-normal text-textGray text-md">
              or register with email
              </p>
            </div>
            <EmailPassword/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInOptions;
