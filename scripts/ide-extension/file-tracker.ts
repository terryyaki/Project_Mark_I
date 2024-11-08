import * as vscode from 'vscode';
import { onFileCreate } from '../hooks/create-file';

export function activate(context: vscode.ExtensionContext) {
  const fileWatcher = vscode.workspace.onDidCreateFiles(async (event) => {
    for (const file of event.files) {
      await onFileCreate(file.fsPath);
    }
  });

  context.subscriptions.push(fileWatcher);
} 