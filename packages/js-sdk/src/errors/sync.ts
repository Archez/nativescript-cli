import { KinveyError } from './kinvey';

export class SyncError extends KinveyError {
  constructor(message = 'An error occurred during sync.') {
    super(message);
    this.name = 'SyncError';
  }
}