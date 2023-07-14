<template>
  <div
    class="TransactionHistoryTable_transactionsListItem__kpJF1 inherited-styles-for-exported-element">
    <div class="TransactionHistoryTable_sale__T9bSN">
      <div class="TransactionHistoryTable_iconWrapper__7qzt5">
        <svg v-if="checkActivity === 'sold'"><use :xlink:href="`#icon-sold`"></use></svg>
        <svg v-if="checkActivity === 'transferred'"><use :xlink:href="`#icon-transferred`"></use></svg>
      </div>
    </div>
    <div class="TransactionHistoryTable_transactionsListItemEl_Img__WZoiU">
      <a :href="href_img">
        <img
          :src="src_img"
          alt="+888 0462 1703"
          class="TransactionHistoryTable_nftImage__69rR3"/>
      </a>
    </div>
    <div class="TransactionHistoryTable_transactionsListItemEl_Main__TUz8Y">
      <span class="TransactionHistoryTable_mainText__GcH0O">
        <a href="">
          <strong>{{ purchase }}</strong>
        </a>
        <span class="TransactionHistoryTable_mainText__GcH0O" v-if="checkActivity === 'sold'">sold by&nbsp;</span>
        <span class="TransactionHistoryTable_mainText__GcH0O" v-if="checkActivity === 'transferred'">transferred from&nbsp;</span>
        <a
          class="TransactionHistoryTable_inline__IQFzk"
          :href="by_href">
          <p
            class="Text_h6__B3dZE Text_primary__Y6qiG Text_semiBold__iFdnC TransactionHistoryTable_mobileUserLabel__btuxZ">
            <span class="TransactionHistoryTable_overflowableUsername__gcPKm">{{ by }}</span>
          </p>
        </a>&nbsp;to&nbsp;
        <a
          class="TransactionHistoryTable_inline__IQFzk"
          :href="to_href">
          <p
            class="Text_h6__B3dZE Text_primary__Y6qiG Text_semiBold__iFdnC TransactionHistoryTable_mobileUserLabel__btuxZ">
            <span class="TransactionHistoryTable_overflowableUsername__gcPKm">{{ to }}</span>
          </p>
        </a>
      </span>
      <span class="TransactionHistoryTable_timePassed__QJyg2">{{ data }}</span>
    </div>
    <div class="TransactionHistoryTable_transactionsListItemEl_Price__u0hGz">
      <span v-if="checkActivity === 'sold'">{{ price }} TON</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  src_img: {
    type: String,
  },
  href_img: {
    type: String,
  },
  data: {
    type: String,
    required: true,
  },
  purchase: {
    type: String,
  },
  by: {
    type: String,
    required: true,
  },
  by_href: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  to_href: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  checkActivity: {
    type: String,
    default: 'sold',
  },
})
</script>

<style lang="sass" scoped>
.Text_h6__B3dZE
  font-size: 16px
  line-height: 24px

.Text_primary__Y6qiG
  color: #059df5

.Text_semiBold__iFdnC
  font-weight: 600

.TransactionHistoryTable_sale__T9bSN
  color: #29b862

.TransactionHistoryTable_iconWrapper__7qzt5
  align-items: center
  display: flex

.TransactionHistoryTable_mobileUserLabel__btuxZ
  align-items: center
  overflow: hidden
  text-overflow: ellipsis
  text-wrap: nowrap
  white-space-collapse: collapse

.TransactionHistoryTable_overflowableUsername__gcPKm
  font-size: 16px
  font-weight: 500
  line-height: 24px
  overflow: hidden
  text-overflow: ellipsis

@media screen and (max-width: 600px)
  .TransactionHistoryTable_overflowableUsername__gcPKm
    font-size: 16px
    line-height: 24px

.TransactionHistoryTable_transactionsListItem__kpJF1
  align-items: center
  border: 1px solid rgba(214, 228, 255, 0.16)
  border-image: none 100% 1 0 1 0 stretch
  border-radius: 24px
  column-gap: 16px
  display: grid
  grid-template-columns: 32px 44px 1fr auto
  padding: 24px
  row-gap: 16px
  width: 100%

.TransactionHistoryTable_transactionsListItemEl_Main__TUz8Y
  display: flex
  flex-direction: column

.TransactionHistoryTable_transactionsListItemEl_Price__u0hGz
  text-align: right

.TransactionHistoryTable_nftImage__69rR3
  border-radius: 6px
  height: 44px
  object-fit: cover
  width: 44px

.TransactionHistoryTable_mainText__GcH0O
  color: #898b8f
  font-size: 16px
  font-weight: 500
  line-height: 24px

.TransactionHistoryTable_timePassed__QJyg2
  color: #898b8f
  font-size: 14px
  font-weight: 500
  line-height: 20px

.TransactionHistoryTable_inline__IQFzk
  display: inline

  p
    display: inline

.TransactionHistoryTable_iconWrapper__7qzt5 svg
  height: 24px
  margin-right: 8px
  width: 24px

.TransactionHistoryTable_transactionsListItemEl_Price__u0hGz span
  color: #e9e9eb
  font-size: 16px
  font-weight: 600
  line-height: 24px

.TransactionHistoryTable_mainText__GcH0O strong
  color: #e9e9eb

.TransactionHistoryTable_iconWrapper__7qzt5 svg path
  fill: currentcolor

</style>
