<!-- 内部导航 -->
<ion-content>
  <ion-tabs>
    <ion-tab [root]="tab1Root" tabTitle="文字新闻"></ion-tab>
    <ion-tab [root]="tab2Root" tabTitle="视频集锦"></ion-tab>
  </ion-tabs>
</ion-content>
如果在tabs里面再次使用tabs就要包括在内容标签里面，要不然就会出现覆盖现象
