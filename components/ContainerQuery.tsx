import React from "react";

const ContainerQuery = () => {
  return (
    <article className="shadow border @container">
      <div className="flex gap-x-4 items-center @max-xl:contents">
        <div className="w-full h-64 bg-pink-300"></div>

        <div className="space-x-4 @lg:space-y-8">
          <h3 className="font-bold text-lg">コンテナクエリ</h3>
          <p>
            説明。説明。説明。説明。説明。説明。説明。説明。説明。
            説明。説明。説明。説明。説明。説明。説明。説明。説明。
          </p>
        </div>
      </div>
    </article>
  );
};

export default ContainerQuery;
