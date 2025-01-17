class _PaymentIQCashier {
  url = "https://payaggregator.com/main/waiting-page/";

  data = {};

  api = {
    set: (data) => {
      this.data = { ...data.config };
    },
    css: (css) => {
      return css;
    },
  };

  constructor(id, data, callbackfunc) {
    callbackfunc(this.api);
    this.data = { ...this.data, ...data };
    const url = this.createUrl(data);
    this.createIframe(id, url, data);
  }

  createIframe(id, url, data) {
    const htmlBlock = document.querySelector(id);
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", url);
    iframe.style.width = "500px";
    iframe.style.height = data.containerHeight;
    iframe.style.minHeight = data.containerMinHeight;
    htmlBlock.appendChild(iframe);
  }

  createUrl(data) {
    return `${this.url}${data.sessionId}/${data.userId}/${
      data.merchantId
    }?${new URLSearchParams({ ...data }).toString()}`;
  }

  responseWithCallBack(res) {
    return this.callbackfunc();
  }
}

const data = {
  merchantId: "87483265",
  userId: "3415135",
  sessionId: "222222",
  environment: "dev",
  method: "creditCard",
  locale: "test",
  providerType: "<?php echo $fields->providerType;?>",
  mode: "<?php echo $fields->mode;?>",
  attributes: "<?php echo json_encode($fields->attributesArr);?>",
  user: "<?php echo json_encode($fields->userArr);?>",
  autoProcess: "<?php echo ($fields->autoProcess ? 'true' : 'false');?>",
  predefinedValues: false,
  containerHeight: "100%",
  containerMinHeight: "800px",
  showFooter: false,
  showHeader: false,
  dev_close_transaction_with_status: "fail",
  isWhiteList: true,
};
