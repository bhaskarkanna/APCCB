import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-land-survey-details',
  imports: [],
  templateUrl: './land-survey-details.html',
  styleUrl: './land-survey-details.css'
})
export class LandSurveyDetailsComponent {

  @ViewChild('cameraInput')
  cameraInput!: ElementRef<HTMLInputElement>;

  latitude: number | null = null;

  longitude: number | null = null;

  imagePreview: string | ArrayBuffer | null = null;

  private cameraStream: MediaStream | null = null;

  constructor(
    private router: Router
  ) {}

  back(): void {

    this.router.navigate(
      ['/address-details']
    );

  }

  next(): void {

    this.router.navigate(
      ['/plantation-details']
    );

  }

  async capturePhoto(): Promise<void> {

    if (!navigator.geolocation) {

      alert(
        'Geolocation is not supported by this browser.'
      );

      return;

    }

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        this.latitude =
          position.coords.latitude;

        this.longitude =
          position.coords.longitude;

        try {

          this.cameraStream =
            await navigator.mediaDevices.getUserMedia({

              video: {
                facingMode: 'environment'
              }

            });

          const video =
            document.getElementById(
              'cameraVideo'
            ) as HTMLVideoElement;

          if (video) {

            video.srcObject =
              this.cameraStream;

          }

        }

        catch (error) {

          console.error(error);

          alert(
            'Please allow camera access.'
          );

        }

      },

      () => {

        alert(
          'Please allow location access.'
        );

      }

    );

  }

  takeSnapshot(): void {

    const video =
      document.getElementById(
        'cameraVideo'
      ) as HTMLVideoElement;

    const canvas =
      document.getElementById(
        'snapshotCanvas'
      ) as HTMLCanvasElement;

    if (!video || !canvas) {

      return;

    }

    const context =
      canvas.getContext('2d');

    if (!context) {

      return;

    }

    canvas.width =
      video.videoWidth;

    canvas.height =
      video.videoHeight;

    context.drawImage(

      video,

      0,

      0,

      canvas.width,

      canvas.height

    );

    this.imagePreview =
      canvas.toDataURL(
        'image/png'
      );

    if (this.cameraStream) {

      this.cameraStream
        .getTracks()
        .forEach(track => track.stop());

    }

  }

  onFileSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (
      !input.files ||
      input.files.length === 0
    ) {

      return;

    }

    const file =
      input.files[0];

    const reader =
      new FileReader();

    reader.onload = () => {

      this.imagePreview =
        reader.result;

    };

    reader.readAsDataURL(file);

  }

}