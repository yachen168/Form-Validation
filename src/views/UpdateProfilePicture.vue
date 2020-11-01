<template>
  <form>
    <div class="title">
      <h1>Update Profile Picture</h1>
      <span>We wanna know you more!</span>
    </div>  
    <div class="upload">
      <input class="upload-input-hidden" type="file" @change="fileSelected" multiple>
      <div class="upload-input">
        <span class="icon-wrapper">
          <font-awesome-icon icon="images" />
        </span>
        <div>
          <p>UPLOAD UP TO 3 PHOTOS</p>
          <span class="maximum-size">MAXIMUM SIZE: 150*150px</span>
        </div>
      </div>
    </div>
    <div v-if="isOversize && images.length > 0" class="warn-oversize">
      <span>
        <font-awesome-icon icon="exclamation-triangle" />
      </span>    
      <span>圖片尺寸超過 150*150</span>
    </div>
    <section class="row images-uploaded">
      <div class="col-4" 
            v-for="(image, index) in images" 
            :key="image.src">
        <div class="item">
          <img :src="image.src" ref="elememt">
          <div @click="deleteImg(index)" 
              class="delete-images">
            <font-awesome-icon icon="trash-alt" />
          </div>
        </div>
      </div>
    </section>
    <button @click.prevent="toNextPage"
            :class="{'disabled': isButtonDisabled}">SUBMIT & NEXT</button>  
  </form>
</template>

<script>

export default {
  data(){
    return {
      images: [],
      cacheImages: [],
      isOversize: false,
    }
  },
  methods: {
    toNextPage(){
      if(!this.isButtonDisabled) {
        this.$router.push({name: 'PaymentMethod'});
        this.$store.commit('changeStep',{ 
          currentPage: 'thirdStep',
          nextPage: 'lastStep'
        });
      }
    },
    fileSelected(event) {
        const files = event.target.files; //取得 File物件]
        console.log(files);
        files.forEach.call(files,this.fileReader);
        console.log(files);
    },
    fileReader(file) {
        const isPNG = file.type === 'image/png';
        if (!isPNG) {
          alert ('檔案格式須為 png');
          return;
        }
        const reader = new FileReader(); //建立 FileReader 監聽 Load 事件
        reader.readAsDataURL(file);

        reader.onload = () => {
          const img = new Image();
          const [maxWidth, maxHeight] = [150,150];
          img.src = reader.result;
          img.onload = () => {
            if (img.width > maxWidth || img.height > maxHeight) {
              this.isOversize = true;
            }
          }
        }
        reader.addEventListener("load", this.createImage);
    },
    createImage(event) {
        const file = event.target;
        const image = {
            title : file.name,
            src : file.result,
        };
        this.cacheImages.push(image);
        for (let item of this.cacheImages) {
          if (this.images.length < 3){
            this.images.push(item);
          }
        }
        this.cacheImages = [];
    },
    deleteImg(index){
      this.images.splice(index, 1);
      this.checkAllImageSize();
    },
    checkAllImageSize(){
      this.$nextTick(function(){
      const [...images] = document.querySelectorAll('.item img');
      this.isOversize = !images.every(image => (image.width <=150 && image.height <= 150));
      })
    }
  },
  computed: {
    isButtonDisabled(){
      return !(this.images.length > 0 && !this.isOversize);
    }
  }
}
</script>

<style lang="scss" scoped>
.upload {
  position: relative;
  max-width: 460px;
  margin: 20px auto 0;
  padding: 35px 0;
  border: 2px solid #000;
  border-radius: 8px;
  color: #9B9B9B;
  &-input {
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
  &-input-hidden {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
}

p {
  margin: 0;
}

.icon-wrapper {
  margin-right: 20px;
  font-size: 48px;
}

.maximum-size {
  font-size: 12px;
}

.warn-oversize {
  padding: 12px 0;
  margin-top: 25px;
  text-align: center;
  letter-spacing: 1px;
  color: #fff;
  background-color:  #F5A623;
  border-radius: 8px;
  span:first-child {
    margin-right: 10px;
  }
}

.images-uploaded {
  margin-top: 25px;
  margin-bottom: 20px;
  .item {
    position: relative;
    width: 140px;
    height: 150px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #000;
    img {
      vertical-align: top;
    }
  }
  .delete-images {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    bottom: 0;
    background-color:  #0275D8;
    font-size: 20px;
    color: #fff;
    opacity: 0;
    cursor: pointer;
    transition: 0.3s;
  }
}

.item:hover {
  .delete-images {
    opacity: 1;
  }
}
</style>