const Custom404 = () => {
  return (
    <div 
    className="text-center p-[50px]"
    >
      <h1>404 - 页面未找到</h1>
      <p>抱歉，我们找不到你要访问的页面。</p>
      <a href="/" 
      className="text-blue-500 hover:text-blue-700 underline"
      >
        返回首页
      </a>
    </div>
  );
};

export default Custom404;
