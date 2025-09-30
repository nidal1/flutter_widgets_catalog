import 'package:flutter/material.dart';

class OutlinedButtonExample extends StatelessWidget {
  const OutlinedButtonExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: OutlinedButton(
        onPressed: () {},
        child: const Text('Outlined Button'),
      ),
    );
  }
}
